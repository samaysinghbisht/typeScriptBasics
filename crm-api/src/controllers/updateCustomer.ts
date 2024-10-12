import { error } from "console";
import { ObjectId } from "mongodb";

export async function updateCustomerController(req: any, res: any) {
    try{

        const { db } = req.app;

        const { id } = req.params;
        

        if (!id){
            return res.status(400).json({ message: "Customer ID is required" });
        }

        const result = await db.collection('customers').updateOne({
            _id: new ObjectId(id),

        },{
            $set: req.body
        });

        if (!result){
            return res.status(404).json({ message: "Customer not found" });
        }
        

        res.status(200).json({
            message: 'Customer Updated.',
            customers: result
        });
    }
    
    catch(error){
        res.status(500).json({ error: error.toString() })
    }
    }