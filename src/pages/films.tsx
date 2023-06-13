interface Movie {
  id: string;
  name: string;
  image: string;
  likes: number;
  views: number;
}

function buildMovie({
  id = "1",
  name = "Super Mario Bros",
  image = "Something",
  likes = 40,
  views = 60,
}: Partial<Movie> = {}): Movie {
  return {
    id,
    name,
    image,
    likes,
    views,
  };
}

const Films = () => {
  return <div>Start Films List</div>;
};

export default Films;
