
export async function GET(request) {
  console.log('Received', request.json())

  return new Response('ack', {
    status: 200,
  })}