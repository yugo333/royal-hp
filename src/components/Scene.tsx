"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";

const fragmentShader = `
  #ifdef GL_ES
  precision mediump float;
  #endif

  uniform float time;
  uniform vec2 resolution;

  void main() {
    // PC/スマホ対応の動的スケール調整
    float scale = resolution.x > resolution.y ? 2.0 : 1.0; // PC: 2.0, スマホ: 1.0
    vec2 uv = (gl_FragCoord.xy * scale - resolution.xy) / resolution.y;
    
    float d = length(uv);
    float t = time * 0.5;
    
    // Create moving pattern with subtle 3D wave effect
    float wave = sin(d * 10.0 - t * 2.0) * 0.5 + 0.5;
    wave *= sin(uv.x * 5.0 + t) * 0.5 + 0.5;
    wave *= sin(uv.y * 3.0 - t * 0.5) * 0.5 + 0.5;
    
    // Add subtle 3D depth variation
    float depth = sin(uv.x * 3.0 + t * 0.8) * sin(uv.y * 4.0 - t * 0.6) * 0.1;
    wave += depth;
    
    // Add gentle glossy highlights
    float gloss = pow(sin(wave * 6.0 + t), 8.0) * 0.15;
    
    // Color palette based on design specification RGB(22,33,39) - Dark Green Base
    vec3 baseColor = vec3(22.0/255.0, 33.0/255.0, 39.0/255.0); // Design spec base - dark green tone
    vec3 color1 = vec3(207.0/255.0, 157.0/255.0, 123.0/255.0); // Main accent RGB(207,157,123)
    vec3 color2 = baseColor * 2.0; // Lighter green variation
    vec3 color3 = baseColor * 0.5; // Darker green variation
    
    vec3 finalColor = mix(color3, color1, wave);
    finalColor = mix(finalColor, color2, sin(t + d * 3.0) * 0.3 + 0.3);
    
    // Add subtle glossy effect
    finalColor += vec3(gloss * 0.6, gloss * 0.4, gloss * 0.2);
    
    // Add vignette effect (keeping smoky atmosphere)
    float vignette = 1.0 - length(uv) * 0.5;
    finalColor *= vignette;
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const vertexShader = `
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

function ShaderPlane() {
  const meshRef = useRef<any>(null);
  const { size } = useThree();

  const uniforms = useRef({
    time: { value: 0 },
    resolution: { value: [size.width, size.height] },
  });

  useFrame(({ clock }) => {
    if (meshRef.current && meshRef.current.material) {
      meshRef.current.material.uniforms.time.value = clock.getElapsedTime();
      meshRef.current.material.uniforms.resolution.value = [
        size.width,
        size.height,
      ];
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[4, 4]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms.current}
      />
    </mesh>
  );
}

export default function Scene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-full bg-[rgb(22,33,39)]" />;
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 2], fov: 50 }}
      style={{ width: "100%", height: "100%", display: "block" }}
      gl={{ antialias: false, alpha: false }}
      dpr={[1, 2]}
    >
      <ShaderPlane />
    </Canvas>
  );
}
