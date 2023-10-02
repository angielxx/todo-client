interface Props {
  reset: () => void;
  error: Error;
}

export const ErrorFallback = ({ reset, error }: Props) => {
  const resetOnClick = () => reset();

  return (
    <div>
      <p>
        에러가 발생했습니다. <br />
        잠시 후 다시 시도해주세요.
      </p>
      <p>{error?.message}</p>
      <button onClick={resetOnClick}>다시 시도하기</button>
    </div>
  );
};
