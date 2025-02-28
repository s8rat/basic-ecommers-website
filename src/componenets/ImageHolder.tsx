interface IImageHolder {
  imageUrl: string;
  alt: string;
  className: string;
}

const ImageHolder = ({ imageUrl, alt, className }: IImageHolder) => {
  return <img src={imageUrl} alt={alt} className={className} />;
};

export default ImageHolder;
