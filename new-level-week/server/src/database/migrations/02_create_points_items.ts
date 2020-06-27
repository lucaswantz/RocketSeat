import Knex from "knex";

export async function up(knex: Knex) {
  // Criar a tabela
  return knex.schema.createTable("points_items", (table) => {
    table.integer("point_id").notNullable().references("id").inTable("points");
    table.integer("item_id").notNullable().references("id").inTable("items");
    table.primary(["point_id", "item_id"]);
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("points_items");
}
