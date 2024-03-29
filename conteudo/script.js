import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function CreateNewLesson() {
  const lessonNumber = prompt('Digite o número da aula:');
  const lessonId = prompt('Digite o ID da aula:');
  const lessonDate = prompt('Digite a data da aula (DD/MM/AAAA):');
  const lessonContent = prompt('Digite o conteúdo da aula:');

  if (lessonNumber && lessonId && lessonDate && lessonContent) {
    const newRow = (
      <tr key={lessonId}>
        <td>{lessonNumber}</td>
        <td>{lessonId}</td>
        <td>{lessonDate}</td>
        <td>{lessonContent}</td>
      </tr>
    );

    ReactDOM.render(newRow, document.getElementById('lesson-table'));
  } else {
    alert('Por favor, preencha todos os campos.');
  }
}

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Adiciona a classe 'fade-in' após o componente ser montado
    setLoaded(true);
  }, []);

  return (
    <div className={loaded ? 'fade-in' : ''}>
      <nav className="navbar">
        <div className="navbar-left">
          <span>Campus-Digital</span>
        </div>
        <div className="navbar-center">
          <span>Conteúdo</span>
        </div>
        <div className="navbar-right">
          <button onClick={CreateNewLesson} className="create-lesson-btn">Criar Nova Aula</button>
        </div>
      </nav>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Aula</th>
              <th>ID</th>
              <th>Data</th>
              <th>Conteúdo</th>
            </tr>
          </thead>
          <tbody id="lesson-table">
            {/* Linhas da tabela serão adicionadas dinamicamente */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
