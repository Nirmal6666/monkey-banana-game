
const express = require('express')
const cors = require('cors')
const { randomUUID } = require('crypto')

const app = express()
const PORT = 5000

// Allow requests from our React frontend
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174']
}))
app.use(express.json())

// Store puzzle solutions on the backend
const activePuzzles = new Map()

// Generate a new puzzle
app.get('/api/puzzle', async (req, res) => {
  try {
    const response = await fetch(
      'https://marcconrad.com/uob/banana/api.php?out=json&base64=no'
    )

    if (!response.ok) {
      throw new Error('Puzzle API request failed')
    }

    const data = await response.json()

    if (!data.question || data.solution === undefined) {
      throw new Error('Invalid puzzle data')
    }

    const puzzleId = randomUUID()

    activePuzzles.set(puzzleId, data.solution)

    // Send the image URL and puzzle ID, NOT the solution
    res.json({
      puzzleId,
      imageUrl: data.question
    })

  } catch (error) {
    console.error('Error fetching puzzle:', error)

    res.status(502).json({
      message: 'Could not generate a puzzle right now.'
    })
  }
})

// Check the player's answer
app.post('/api/puzzle/answer', (req, res) => {
  const { puzzleId, answer } = req.body

  if (!puzzleId || answer === undefined || !Number.isFinite(Number(answer))) {
    return res.status(400).json({
      message: 'Valid puzzleId and answer are required.'
    })
  }

  const solution = activePuzzles.get(puzzleId)

  if (solution === undefined) {
    return res.status(404).json({
      message: 'Puzzle not found or already completed.'
    })
  }

  const correct = Number(answer) === Number(solution)

  if (correct) {
    activePuzzles.delete(puzzleId)
  }

  res.json({ correct })
})

// Start the backend server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`)
})
