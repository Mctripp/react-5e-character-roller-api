const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  class: {
    class_name: {
      type: String,
      required: true
    },
    level: { // Maybe expands into levels{...} with each individual change
      type: Number,
      required: true,
      default: 1
    },
    hit_dice: {
      type: Number,
      required: true
    },
    hit_points: {
      increase_constant: {
        type: Number,
        required: true
      },
      increase_roll: {
        type: Number,
        required: true
      }
    },
    proficiencies: {
      choose: {
        type: Number,
        required: false
      },
      from: {
        type: Array,
        required: true
      }
    },
    equipment: {
      choose: {
        type: Number,
        required: false
      },
      from: {
        type: Array,
        required: true
      }
    },
    features: {
      type: Array,
      required: true
    },
    class_feature: {
      type: Array,
      required: false
    }
  },
  race: {
    race_name: {
      type: String,
      required: true
    },
    ability_score: {
      ability: {
        type: String,
        required: true
      },
      increase_by: {
        type: Number,
        required: true
      }
    },
    age: {
      max: {
        type: Number,
        required: true
      },
      min: {
        type: Number,
        required: true
      }
    },
    size: {
      max: {
        type: Number,
        required: true
      },
      min: {
        type: Number,
        required: true
      }
    },
    speed: {
      type: Number,
      required: true
    },
    race_feature: {
      type: Array,
      required: true
    },
    languages: {
      choose: {
        type: Number,
        required: false
      },
      from: {
        type: Array,
        required: true
      }
    }
  },
  background: {
    background_name: {
      type: String,
      required: true
    },
    proficiencies: {
      choose: {
        type: Number,
        required: false
      },
      from: {
        type: Array,
        required: true
      }
    },
    languages: {
      choose: {
        type: Number,
        required: false
      },
      from: {
        type: Array,
        required: true
      }
    },
    equipment: {
      choose: {
        type: Number,
        required: false
      },
      from: {
        type: Array,
        required: true
      }
    },
    feature: {
      type: Array,
      required: true
    }
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Character', characterSchema)
