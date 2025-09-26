const ProductCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="mb-3 h-[350px] w-full rounded-md bg-neutral-2"></div>

      <div className="flex flex-col gap-2">
        <div className="h-4 w-1/2 rounded bg-neutral-3"></div>
        <div className="h-5 w-3/4 rounded bg-neutral-3"></div>
        <div className="flex gap-3">
          <div className="h-4 w-16 rounded bg-neutral-3"></div>
          <div className="h-4 w-12 rounded bg-neutral-3"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
