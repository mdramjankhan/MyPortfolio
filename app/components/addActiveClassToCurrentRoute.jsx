import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function addActiveClassToCurrentRoute() {
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState(router.pathname);

  useEffect(() => {
    const handleRouteChange = (url) => {
      setActiveRoute(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return activeRoute;
}

export default addActiveClassToCurrentRoute;