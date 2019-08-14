import MovieApi from "./api/movies";

interface CoreConfig {
  apiVersion?: string | null;
}
interface CoreProps {
  host: string;
  env: string;
  config: CoreConfig;
}

class Core {
  static host = "";
  static env = "";
  static config: CoreConfig = {
    apiVersion: null
  };

  static init({ host, env, config }: CoreProps) {
    Core.host = host;
    Core.env = env;
    Core.config = config;
    // do other initialization here
    // add other parameters if needed
  }
}

export { MovieApi };

export default Core;
