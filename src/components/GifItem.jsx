export const GifItem = ({title, url}) => {
  
  return (
    <div className="card col">
      <img src={url} alt={title} className="img-card-top" />
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
      </div>
    </div>
  );
}
