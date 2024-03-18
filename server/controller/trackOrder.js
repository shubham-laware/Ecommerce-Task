import pool from '../db/dbConnect.js';

async function TrackOrder(req, res) {
  try {
    const { orderID } = req.query;

    const queryResult = await pool.query('SELECT Status FROM orderStatus WHERE OrderID = ?', [orderID]);

    if (queryResult.length > 0) {
        console.log("QUERY RESULT:", queryResult)

        const { Status } = queryResult[0][0];
      console.log("STATUS:",Status)

      res.status(200).json({ status: Status });
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default TrackOrder;
