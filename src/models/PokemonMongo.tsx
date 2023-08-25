import mongoose from "mongoose";

const { Schema, model } = mongoose;

const pokemonSchema = new Schema({
  _id: Schema.ObjectId,
  data: {
    versions: [
      {
        name: Schema.Types.String,
        data: {
          pokedex_data: {
            "National No.": Schema.Types.String,
            Type: [Schema.Types.String],
            Species: Schema.Types.String,
            Height: Schema.Types.String,
            Weight: Schema.Types.String,
            Abilities: {
              type: Schema.Types.Map,
              of: {
                href: Schema.Types.String,
                effect: Schema.Types.String,
                hidden: Schema.Types.Boolean,
              },
            },
          },
          training_data: {
            "EV yield": Schema.Types.String,
            "Catch rate": Schema.Types.String,
            BaseFriendship: Schema.Types.String,
            "Base Exp.": Schema.Types.String,
            "Growth Rate": Schema.Types.String,
          },
          breeding_data: {
            Gender: Schema.Types.String,
          },
          base_stats: {
            HP: {
              Base: Schema.Types.String,
              Min: Schema.Types.String,
              Max: Schema.Types.String,
            },
            Attack: {
              Base: Schema.Types.String,
              Min: Schema.Types.String,
              Max: Schema.Types.String,
            },
            Defense: {
              Base: Schema.Types.String,
              Min: Schema.Types.String,
              Max: Schema.Types.String,
            },
            "Sp. Atk": {
              Base: Schema.Types.String,
              Min: Schema.Types.String,
              Max: Schema.Types.String,
            },
            "Sp. Def": {
              Base: Schema.Types.String,
              Min: Schema.Types.String,
              Max: Schema.Types.String,
            },
            Speed: {
              Base: Schema.Types.String,
              Min: Schema.Types.String,
              Max: Schema.Types.String,
            },
            Total: Schema.Types.String,
          },
          defense_stats: {
            type: Schema.Types.Map,
            of: {
              type: Schema.Types.Map,
              of: Schema.Types.String,
            },
          },
          images: {
            discord_image: Schema.Types.String,
            discord_sprite: Schema.Types.String,
          },
        },
      },
    ],
    evo_stats: [
      [
        {
          from: {
            name: Schema.Types.String,
            nationalNo: Schema.Types.String,
            _type: [Schema.Types.String],
            nickname: Schema.Types.String,
          },
          to: {
            name: Schema.Types.String,
            nationalNo: Schema.Types.String,
            _type: [Schema.Types.String],
            nickname: Schema.Types.String,
          },
          _type: [Schema.Types.String],
          requirement: Schema.Types.String,
          shed: {
            name: Schema.Types.String,
            nationalNo: Schema.Types.String,
            _type: [Schema.Types.String],
            nickname: Schema.Types.String,
            required: false,
          },
        },
      ],
    ],
    attacks_data: {
      type: Schema.Types.Map,
      of: [
        {
          type: Schema.Types.Map,
          of: Schema.Types.String,
        },
      ],
    },
    entries: {
      type: Schema.Types.Map,
      of: [Schema.Types.String],
    },
    name: Schema.Types.String,
  },
});

const PokemonMongo = model("pokemon", pokemonSchema);

export default PokemonMongo;
