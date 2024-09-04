export const SkeletonText = ({ story }) => {
  return (
    <div className='d-flex justify-content-center'>
      <p className='font-normal text-base my-4 max-w-lg text-neutral-200'>
        {story}
      </p>
    </div>
  );
};
