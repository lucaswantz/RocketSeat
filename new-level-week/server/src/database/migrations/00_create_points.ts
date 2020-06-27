import Knex from "knex";

export async function up(knex: Knex) {
  // Criar a tabela
  return knex.schema.createTable("points", (table) => {
    table.increments("id").primary();
    table.string("imagem").notNullable();
    table.string("nome").notNullable();
    table.string("email").notNullable();
    table.string("whatsapp").notNullable();
    table.decimal("latitude").notNullable();
    table.decimal("longitude").notNullable();
    table.string("city").notNullable();
    table.string("state").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("points");
}
