import { NextApiRequest, NextApiResponse } from 'next';
import handler, { Data } from '../pages/api/hello';

describe('API endpoint', () => {

  it('should return 200 status and JSON data with name property', async () => {

    const mockReq = {} as NextApiRequest;
    const mockRes = {
      status: jest.fn(() => mockRes),
      json: jest.fn(),
    } as unknown as NextApiResponse<Data>;

    await handler(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({ name: 'John Doe' });

  });

});