export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== 'invalidate-orage-2022') {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    await res.revalidate(`/${req.query.url}`)
    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}