
import useFetchGifs from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem"

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category)

  return (
    <div className="row my-4">
      <h3>{category}</h3>
      <div className="d-flex">
        {
          isLoading
            ?
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            :
            images.map(image => (
              <GifItem key={image.id} {...image} />
            ))
        }
      </div>
    </div>
  );
}
