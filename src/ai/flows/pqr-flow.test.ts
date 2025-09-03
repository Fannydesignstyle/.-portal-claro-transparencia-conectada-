import { submitPQR } from './pqr-flow';

describe('PQR Flow', () => {
  it('should return a success message when given valid input', async () => {
    const input = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      subject: 'Test Subject',
      message: 'This is a test message.',
    };

    const result = await submitPQR(input);

    expect(result).toEqual({
      success: true,
      message: 'Su PQR ha sido recibida y registrada con éxito.',
    });
  });
});
