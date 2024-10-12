import { error } from "console";
import { ObjectId } from "mongodb";

export async function deleteCustomerController(req: any, res: any) {
    try{

        const { db } = req.app;

        const { id } = req.params;
        console.log(id);
        if (!id){
            return res.status(400).json({ message: "Customer ID is required" });
        }

        const result = await db.collection('customers').deleteOne({
            _id: new ObjectId(id)
        });

        if (!result){
            return res.status(404).json({ message: "Customer not found" });
        }
        

        res.status(200).json({
            message: 'Customer Deleted.',
            customers: result
        });
    }
    
    catch(error){
        res.status(500).json({ error: error.toString() })
    }
    }