import WindowComponent from "@/components/WindowComponent";

type TWindowPageProps = {
  params: {
    location: string;
  };
  searchParams: Record<string, any>;
};

const WindowPage = ({
  params: { location },
  searchParams: { latitude, longitude },
}: TWindowPageProps) => {
  return <WindowComponent latitude={latitude} longitude={longitude} />;
};

export default WindowPage;
