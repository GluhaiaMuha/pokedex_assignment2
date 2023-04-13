import React from 'react';
import './app.css'
import {Link} from "react-router-dom";
import {useState, useEffect} from "react"


const App = () => {
    const [pokemons, setPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(18);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState("");


    //Get Pokemons from PokeAPI
    useEffect(() => {
        const fetchPokemons = async () => {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon?limit=90`
            );
            const data = await response.json();
            setPokemons(data.results.map((result, index) => ({
                name: result.name,
                id: index + 1,
            })));
        };
        fetchPokemons();
    }, []);


    // Get current pokemons for Pagination
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = pokemons.slice(
        indexOfFirstPokemon,
        indexOfLastPokemon
    );

    // Change page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const linkStyle = {
        marginRight: "1rem",
        fontSize: "1.5rem",
        color: "white"
    };

    const onSeeMoreClick = (id) => {
        setModalContent(`ID: ${id}`);

        setShowModal(true);
    };

    return (
        <div className="App">
            <div className="gradient__bg">


                {/*Navbar*/}
                <div className="nav">
                    <nav className="app__navbar text-pop-up-top">
                        <Link to="/" style={linkStyle}>
                            PokeDex
                        </Link>
                        <Link to="/about" style={linkStyle}>
                            About
                        </Link>
                    </nav>
                </div>

                {/*Pokemon Cards*/}
                <div className="container" style={{ marginTop: "3rem" }}>
                    <div className="card-columns">
                        {currentPokemons.map((pokemon) => (
                            <div
                                className="card text-center mx-auto"
                                style={{ maxWidth: "20rem" }}
                                key={pokemon.id}
                            >
                                <img
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                                    alt={pokemon.name}
                                />
                                <h3>{pokemon.name}</h3>
                                <p>ID: {pokemon.id}</p>
                                <button
                                    className="btn-primary"
                                    onClick={() => onSeeMoreClick(pokemon.id)}
                                >
                                    See More
                                </button>
                            </div>
                        ))}
                    </div>
                    {/*Pokemon Modal*/}
                    {showModal && (
                        <div className="modal">
                            <div className="modal-content">
                                {modalContent}
                                <button onClick={() => setShowModal(false)}>Close</button>
                            </div>
                        </div>
                    )}
                </div>

                {/*Pagination for the pokemon cards*/}
                <div className="d-flex justify-content-center mt-4">
                        {Array.from(
                            {length: Math.ceil(pokemons.length / pokemonsPerPage)},
                            (_, index) => (
                                <li key={index} className="page-item">
                                    <button
                                        className={`page-link ${
                                            currentPage === index + 1 ? "active" : ""
                                        }`}
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            )
                        )}
                </div>
            </div>
        </div>
    );
};


export default App;