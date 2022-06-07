export class AppError {
  public readonly message: string =
    'An error has occurred while processing your request.';

  constructor(error: unknown) {
    if (error instanceof Error) {
      this.message = error.message;
    }
  }
}
