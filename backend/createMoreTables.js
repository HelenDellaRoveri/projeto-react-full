import { sql } from './sql.js'

async function createTables() {
  try {
    console.log('Iniciando criação de novas tabelas...');

    await sql`
      CREATE TABLE IF NOT EXISTS turmas (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        nome TEXT NOT NULL,
        descricao TEXT,
        professor_id UUID NOT NULL,
        CONSTRAINT fk_professor FOREIGN KEY(professor_id) REFERENCES users(id) ON DELETE CASCADE
      );
    `;
    console.log('Tabela "turmas" criada com sucesso.');

    await sql`
      CREATE TABLE IF NOT EXISTS alunos (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        nome_completo TEXT NOT NULL,
        matricula TEXT UNIQUE
      );
    `;
    console.log('Tabela "alunos" criada com sucesso.');

    await sql`
      CREATE TABLE IF NOT EXISTS turmas_alunos (
        turma_id UUID NOT NULL,
        aluno_id UUID NOT NULL,
        PRIMARY KEY (turma_id, aluno_id),
        CONSTRAINT fk_turma FOREIGN KEY(turma_id) REFERENCES turmas(id) ON DELETE CASCADE,
        CONSTRAINT fk_aluno FOREIGN KEY(aluno_id) REFERENCES alunos(id) ON DELETE CASCADE
      );
    `;
    console.log('Tabela "turmas_alunos" criada com sucesso.');

    await sql`
      CREATE TABLE IF NOT EXISTS frequencia (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        turma_id UUID NOT NULL,
        aluno_id UUID NOT NULL,
        data_aula DATE NOT NULL,
        presente BOOLEAN NOT NULL,
        CONSTRAINT fk_turma FOREIGN KEY(turma_id) REFERENCES turmas(id) ON DELETE CASCADE,
        CONSTRAINT fk_aluno FOREIGN KEY(aluno_id) REFERENCES alunos(id) ON DELETE CASCADE
      );
    `;
    console.log('Tabela "frequencia" criada com sucesso.');

    await sql`
      CREATE TABLE IF NOT EXISTS avaliacoes (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        turma_id UUID NOT NULL,
        aluno_id UUID NOT NULL,
        descricao TEXT NOT NULL,
        nota DECIMAL(4, 2), -- Ex: 10.00 ou 7.50
        data_avaliacao DATE NOT NULL,
        CONSTRAINT fk_turma FOREIGN KEY(turma_id) REFERENCES turmas(id) ON DELETE CASCADE,
        CONSTRAINT fk_aluno FOREIGN KEY(aluno_id) REFERENCES alunos(id) ON DELETE CASCADE
      );
    `;
    console.log('Tabela "avaliacoes" criada com sucesso.');

    console.log('Todas as tabelas foram criadas ou já existiam.');
    
  } catch (error) {
    console.error('Ocorreu um erro ao criar as tabelas:', error);
  } finally {
    // É importante fechar a conexão após o script
    await sql.end();
  }
}

createTables();