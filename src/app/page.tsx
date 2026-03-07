import Scene from '@/components/Scene'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Royal HP
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            NextJS + ThreeJS ホームページへようこそ
          </p>
        </header>

        <main className="space-y-12">
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              3D インタラクティブコンポーネント
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              下のボックスをクリックして回転させてみてください。マウスでカメラを移動できます。
            </p>
            <Scene />
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              技術スタック
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                  NextJS 14
                </h3>
                <p className="text-blue-700 dark:text-blue-400 text-sm">
                  React フレームワーク、TypeScript、Tailwind CSS
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                  ThreeJS
                </h3>
                <p className="text-green-700 dark:text-green-400 text-sm">
                  @react-three/fiber, @react-three/drei
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
