import { LargestPrimePage } from "@/lib/LargestPrimePage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ClientFetchingPrimePage = () => {
  const router = useRouter();

  let maxString = router.query.maximum;

  const max = Number.parseInt(maxString as string);

  const [data, setData] = useState<null | number>(null);

  useEffect(() => {
    if (Number.isNaN(max)) {
      return;
    }
    fetch(`/api/get-largest-prime?maximum=${max}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, [max]);

  return (
    <LargestPrimePage
      maximum={max}
      largestPrime={data}
      contentStrategy="client-fetching"
    />
  );
};

export default ClientFetchingPrimePage;
