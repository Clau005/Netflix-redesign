import Image from "next/image"
import { useRecoilState } from "recoil"
import { modalState, movieState } from "../atoms/modalAtom"
import { baseUrl } from "../constants/movie"
import { Movie } from "../typings"

interface Props {
    // when using
    // movie: Movie | DocumentData
    movie: Movie
}

function Thumbnail({ movie }: Props) {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  return (
    <div className="relative h-[13vh] min-w-[210px] cursor-pointer transition duration-200
    ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
         <Image
            src={`https://image.tmdb.org/t/p/w500${
                movie.backdrop_path || movie.poster_path
            }`}
            className="rounded-sm object-cover md:rounded"
            layout="fill"
            alt="Image"
            onClick={() => {
              setCurrentMovie(movie)
              setShowModal(true)
            }}
            />
    </div>
  )
}

export default Thumbnail

