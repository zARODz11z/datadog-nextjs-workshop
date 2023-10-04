import { LargestPrimePage } from "@/lib/LargestPrimePage";
import { getLargestPrime } from "@/lib/get-largest-prime";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface PageProps {
  largestPrime: number | null;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  const max = context.params?.maximum;

  if (typeof max !== "string") {
    return { props: { largestPrime: null } };
  }
  const largestPrime = getLargestPrime(Number.parseInt(max));

  console.log({ context, largestPrime });

  const props: PageProps = { largestPrime };
  return { props };
};

const SSRPrimePage = ({ largestPrime }: PageProps) => {
  const router = useRouter();
  let maxString = router.query.maximum;
  const max = Number.parseInt(maxString as string);

  return (
    <LargestPrimePage
      maximum={max}
      largestPrime={largestPrime}
      contentStrategy="ssr"
    />
  );
};

export default SSRPrimePage;
