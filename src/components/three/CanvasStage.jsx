import { lazy, Suspense } from 'react'

const Scene = lazy(() => import('./Scene'))

export default function CanvasStage() {
  return (
    <div className="fixed inset-0 z-0 h-[100svh] w-full">
      <Suspense fallback={<div className="h-full w-full bg-roadway-black" />}>
        <Scene />
      </Suspense>
    </div>
  )
}
