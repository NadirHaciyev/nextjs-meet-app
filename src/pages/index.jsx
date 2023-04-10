import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

export default function Home() {
  const [stream, setStream] = useState(null)
  var test = 'test'

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     navigator.mediaDevices
  //       .getUserMedia({
  //         audio: true,
  //         video: true,
  //         video: {
  //           width: 1920,
  //           height: 1080,
  //           frameRate: { ideal: 60, max: 60 },
  //           facingMode: 'user'
  //         }
  //       })
  //       .then((stream) => setStream(stream));
  //   }
  // }, []);

  return (
    // <>{stream && <ReactPlayer className="!w-screen !h-screen" playing muted url={stream} />}</>
    <div>ad</div>
  )
}
