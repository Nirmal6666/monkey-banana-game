
const API_BASE_URL = 'http://localhost:5000/api'

export type Puzzle = {
  puzzleId: string
  imageUrl: string
}

export async function getPuzzle(): Promise<Puzzle> {
  const response = await fetch(`${API_BASE_URL}/puzzle`)

  if (!response.ok) {
    throw new Error('Failed to load puzzle')
  }

  return response.json()
}

export async function checkAnswer(
  puzzleId: string,
  answer: number,
): Promise<{ correct: boolean }> {
  const response = await fetch(`${API_BASE_URL}/puzzle/answer`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ puzzleId, answer }),
  })

  if (!response.ok) {
    throw new Error('Failed to check answer')
  }

  return response.json()
}
