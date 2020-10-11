const controller = {};

//Método para traer notas.
controller.list =  (req,res)=>{

    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM notas',(error,notas)=>{
            res.render('nota',{
                data: notas
            });
        });
    });

   
};

//Método para añadir notas
controller.add = (req, res)=>{
    const notas = req.body;

    req.getConnection((err, conn)=>{
        const query = 'INSERT INTO notas SET ?';
        conn.query(query,[notas],(error, data)=>{
            console.log(data);
            res.redirect('/');
        })

    });

};
//Método para eliminar una nota
controller.delete = (req,res) =>{
    req.getConnection((err,conn)=>{
        const query = 'DELETE FROM notas WHERE id= ?';
        conn.query(query,req.params.id,(error,data)=>{
            console.log(data);
            res.redirect('/');
        })
    })
};

//Método para actualizar el estado a una nota a realizado
controller.done = (req,res) =>{
    req.getConnection((err,conn)=>{
        const query = 'UPDATE notas SET hecho=1 WHERE id=?';
        conn.query(query,req.params.id,(error,data)=>{
            console.log(data);
            res.redirect('/');
        })
    })
}

module.exports = controller;