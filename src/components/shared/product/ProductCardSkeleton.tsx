const ProductCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-neutral-2 h-[350px] w-full mb-3 rounded-md"></div>

      <div className="flex flex-col gap-2">
        <div className="h-4 bg-neutral-3 rounded w-1/2"></div>
        <div className="h-5 bg-neutral-3 rounded w-3/4"></div>
        <div className="flex gap-3">
          <div className="h-4 w-16 bg-neutral-3 rounded"></div>
          <div className="h-4 w-12 bg-neutral-3 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
