
export async function POST(request) {
  const text = await request.text()
  console.log('Received', text)

  return new Response('ack', {
    status: 200,
  })}