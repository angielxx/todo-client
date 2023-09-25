export class CustomError extends Error {
  response?: {
    data: { message: string };
    status: number;
    headers: string;
  };
}
