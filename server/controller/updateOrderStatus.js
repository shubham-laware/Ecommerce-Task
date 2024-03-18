import pool from '../db/dbConnect.js'

async function UpdateOrderStatus(req,res){

    const{orderID,status}=req.body
    try {
        await pool.query('UPDATE orderStatus SET Status = ? WHERE OrderID = ?', [status, orderID]);
        
        console.log(`Order status updated successfully for OrderID: ${orderID}`);
        res.status(200).json({ message: `Order status updated successfully for OrderID: ${orderID}` });
    } catch (error) {
        console.error('Error updating order status:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default UpdateOrderStatus;