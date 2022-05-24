import React from 'react';
import { db } from "../components/firebase-config";
import { useState, useEffect } from "react";
import {
    collection,
    onSnapshot,
    doc,
    addDoc,

    deleteDoc,
    setDoc
} from "firebase/firestore"
function Projetos() {

    const [Projeto_lista, setProjeto_lista] = useState([])
    const projetoColletionRef = collection(db, "Projetos_lista")
    useEffect(() => {
        onSnapshot(projetoColletionRef, snapshot => {
            setProjeto_lista(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    viewing: false,
                    ...doc.data()
                }
            }))
        })
    }, [])

    const handleView = id => {
        const projetoclone = [...Projeto_lista]


        projetoclone.forEach(Projeto_lista => {
            if (Projeto_lista.id === id) {
                Projeto_lista.viewing = !Projeto_lista.viewing
            } else {
                Projeto_lista.viewing = false
            }
        })
        setProjeto_lista(projetoclone)
    }
    const removeprojeto = id => {
        deleteDoc(doc(db, "Projeto_lista", id))
    }

    return (
        <div className="App">
            <div className="projeto">
                {Projeto_lista.map((Projeto_lista, i) => (
                    <div className="projetos" key={Projeto_lista.id}>
                        <h3>{Projeto_lista.Id}</h3>
                        <p dangerouslySetInnerHTML={{ __html: Projeto_lista.Desc }}></p>
                        {Projeto_lista.viewing && <div>
                            <h4>Usuarios</h4>
                            <ul>
                                {Projeto_lista.Usuarios.map((Usuarios, i) => (
                                    <li key={i}>{Usuarios}</li>
                                ))}
                            </ul>
                        </div>}
                        <div>
                            <div className="buttons">
                                <button onClick={() => handleView(Projeto_lista.id)}>Ver {Projeto_lista.viewing ? 'menos' : 'mais'}</button>
                                <button className="remove" onClick={() => removeprojeto(Projeto_lista.id)}>Remover</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projetos;