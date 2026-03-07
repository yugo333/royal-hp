"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { Points, PointMaterial, shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

// カスタムGLSLシェーダーマテリアル
const GlowShaderMaterial = shaderMaterial(
  {
    time: 0,
    resolution: new THREE.Vector2(),
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform float time;
    uniform vec2 resolution;
    varying vec2 vUv;
    
    // ノイズ関数
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }
    
    // スムーズノイズ
    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }
    
    void main() {
      vec2 uv = vUv;
      
      // 基本設計のカラーパレット
      vec3 baseColor = vec3(0.086, 0.129, 0.153); // RGB(22, 33, 39) - 基本ベースカラー
      vec3 brandGold = vec3(0.812, 0.616, 0.482); // RGB(207, 157, 123) - ブランドゴールド
      
      // 背景はベースカラーのグラデーション
      vec2 center = vec2(0.5, 0.5);
      float dist = distance(uv, center);
      vec3 backgroundBase = mix(baseColor * 1.2, baseColor * 0.8, dist);
      
      // 泡の効果を計算
      float bubbles = 0.0;
      
      // 複数の泡をシミュレート
      for (int i = 0; i < 8; i++) {
        float layer = float(i) * 0.5;
        
        // 泡の位置計算（下から上への動き）
        vec2 bubblePos = vec2(
          sin(time * 0.3 + layer) * 0.3,
          fract((time * 0.1 + layer * 0.2) * 0.5) * 2.0 - 1.0
        );
        
        // 泡の大きさと強度
        float bubbleSize = 0.1 + sin(layer + time * 0.4) * 0.05;
        float bubbleDist = distance(uv - vec2(0.5, 0.5), bubblePos);
        
        // 泡の影響範囲
        float bubbleInfluence = 1.0 - smoothstep(0.0, bubbleSize, bubbleDist);
        bubbleInfluence *= sin(time * 2.0 + layer * 3.0) * 0.3 + 0.7;
        
        bubbles += bubbleInfluence * (0.5 - float(i) * 0.05);
      }
      
      // 微細な泡のきらめき
      float sparkles = 0.0;
      for (int i = 0; i < 12; i++) {
        float sparkleLayer = float(i) * 0.3;
        vec2 sparkleUV = uv * (4.0 + sparkleLayer);
        sparkleUV += time * (0.05 + sparkleLayer * 0.02);
        
        float sparkle = noise(sparkleUV);
        sparkle = pow(sparkle, 4.0);
        sparkle *= sin(time * 3.0 + sparkleLayer * 8.0) * 0.5 + 0.5;
        
        // Y方向の移動をシミュレート（泡の軌跡）
        float yMovement = fract(sparkleUV.y + time * 0.1);
        sparkle *= smoothstep(0.0, 0.3, yMovement) * smoothstep(1.0, 0.7, yMovement);
        
        sparkles += sparkle * 0.1;
      }
      
      // 泡の総合効果
      float totalBubbleEffect = bubbles + sparkles;
      
      // 色の合成：泡の付近だけゴールド、他はベースカラー
      vec3 finalColor = backgroundBase;
      finalColor = mix(finalColor, brandGold, totalBubbleEffect);
      
      // ベースカラーをほんのり保持
      finalColor = mix(finalColor, baseColor, 0.3);
      
      // ビネット効果
      float vignette = 1.0 - dist * 0.8;
      finalColor *= vignette;
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `,
);

// Three.jsに登録
extend({ GlowShaderMaterial });

// TypeScript用の型宣言
declare global {
  namespace JSX {
    interface IntrinsicElements {
      glowShaderMaterial: any;
    }
  }
}

function BackgroundGlow() {
  const ref = useRef<any>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.time = state.clock.elapsedTime;
    }
  });

  return (
    <mesh position={[0, 0, -10]} scale={[80, 80, 1]}>
      <planeGeometry args={[1, 1]} />
      <glowShaderMaterial
        ref={ref}
        resolution={[1024, 1024]}
        transparent={false}
      />
    </mesh>
  );
}

function ChampagneBubbles() {
  const ref = useRef<THREE.Points>(null);

  // シャンパンの泡のような位置とアニメーション用データ
  const { positions, velocities, lifetimes } = useMemo(() => {
    const particleCount = 600;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const lifetimes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // グラスの形を意識した初期位置（下部から中央に向けて）
      const radius = Math.random() * 3 + 0.5; // グラス底部の半径
      const angle = Math.random() * Math.PI * 2;

      positions[i3] = Math.cos(angle) * radius * (0.3 + Math.random() * 0.7); // x
      positions[i3 + 1] = -15 + Math.random() * 5; // y (下部開始)
      positions[i3 + 2] =
        Math.sin(angle) * radius * (0.3 + Math.random() * 0.7); // z

      // 上昇速度（泡の大きさで速度が変わる）
      velocities[i3] = (Math.random() - 0.5) * 0.02; // x方向の微小な揺れ
      velocities[i3 + 1] = 0.05 + Math.random() * 0.1; // y方向（上昇）
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02; // z方向の微小な揺れ

      // 生存時間（ランダムな開始タイミング）
      lifetimes[i] = Math.random() * 100;
    }

    return { positions, velocities, lifetimes };
  }, []);

  useFrame((state) => {
    if (ref.current) {
      const positionsArray = ref.current.geometry.attributes.position
        .array as Float32Array;

      for (let i = 0; i < positionsArray.length / 3; i++) {
        const i3 = i * 3;

        // 位置を更新（上昇）
        positionsArray[i3] += velocities[i3]; // x
        positionsArray[i3 + 1] += velocities[i3 + 1]; // y
        positionsArray[i3 + 2] += velocities[i3 + 2]; // z

        // 上部に達したか、時間経過で泡をリセット
        if (positionsArray[i3 + 1] > 15 || lifetimes[i] > 150) {
          // 新しい泡を下部から生成
          const radius = Math.random() * 3 + 0.5;
          const angle = Math.random() * Math.PI * 2;

          positionsArray[i3] =
            Math.cos(angle) * radius * (0.3 + Math.random() * 0.7);
          positionsArray[i3 + 1] = -15 + Math.random() * 5;
          positionsArray[i3 + 2] =
            Math.sin(angle) * radius * (0.3 + Math.random() * 0.7);

          // 新しい速度
          velocities[i3] = (Math.random() - 0.5) * 0.02;
          velocities[i3 + 1] = 0.05 + Math.random() * 0.1;
          velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;

          lifetimes[i] = 0;
        }

        lifetimes[i] += 1;
      }

      ref.current.geometry.attributes.position.needsUpdate = true;

      // グラス全体をゆっくり回転
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="rgb(207,157,123)"
        size={1.2}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.7}
        alphaTest={0.1}
      />
    </Points>
  );
}

export default function MenuScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{
          position: [0, 0, 25],
          fov: 60,
          near: 0.1,
          far: 100,
        }}
        performance={{ min: 0.5 }}
        dpr={[1, 2]}
      >
        <BackgroundGlow />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 15, 10]} intensity={0.6} />
        <pointLight
          position={[-10, -10, 10]}
          intensity={0.3}
          color="rgb(207,157,123)"
        />
        <ChampagneBubbles />
      </Canvas>
    </div>
  );
}
