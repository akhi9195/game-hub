import useData from "./useData";

interface Platform {
  platform: string;
  value?: string;
}

const platformMap: Record<string, string> = {
  "PC (Windows)": "windows",
  "Web Browser": "browser",
};

const usePlatform = () => {
  const { data, error, isLoading } = useData<Platform>("/games");

  const platforms = [...new Set(data.map((game) => game.platform))].map(
    (platform) => ({
      platform,
      value: platformMap[platform],
    }),
  );

  return {
    data: platforms,
    error,
    isLoading,
  };
};

export default usePlatform;
