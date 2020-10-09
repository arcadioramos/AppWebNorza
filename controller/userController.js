const controller = {};

controller.list =  (req,res)=>{ //Obtener todos los usuarios

    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM user',(error,user)=>{
            res.render('user',{
                data: user
            });
        });
    });

   
};


controller.add = (req, res)=>{
    const user = req.body;

    req.getConnection((err, conn)=>{

        const query = 'INSERT INTO user SET ?';
        conn.query(query,[user],(error, data)=>{
            console.log(data);
            res.redirect('/'); //Me regresa a la lista de usuarios.
        })

    });

};


module.exports = controller;