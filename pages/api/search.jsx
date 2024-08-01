
export default async function handler(req, res) {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    const apiKey = process.env.TMDB_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'Server configuration error' });
    }

    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`);
        
        if (!response.ok) {
            return res.status(response.status).json({ error: `Error! status: ${response.status}` });
        }

        const data = await response.json();

        // Setting cache headers to improve performance
        res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');

        res.status(200).json(data);
    } catch (error) {
        console.error('Failed to fetch data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}
