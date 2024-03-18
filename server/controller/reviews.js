import pool from '../db/dbConnect.js'

async function getReviews() {
    try {
      const [rows] = await pool.query('SELECT * FROM reviews');
    //   console.log('reviews:', rows);
      return rows;
    } catch (err) {
      console.error('Error executing query:', err);
    }
  }

async function postReviews(name,review){
    try {
        const query = 'INSERT INTO reviews (Name,Reveiw) VALUES (?, ?)';
        const [result] = await pool.query(query, [name,review]);
        console.log(result);
        return result
       
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}
  
export {getReviews,postReviews} ;


