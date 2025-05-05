// CAMERA
const camReqUnopen = posts.filter(post => post.departments === "camera" 
    && post.category === "requirements" && post.opened_id === null).length;

  const camWorkUnopen = posts.filter(post => post.departments === "camera" 
    && post.category === "workspace" && post.opened_id === null).length;

  const camFinUnopen = posts.filter(post => post.departments === "camera" 
    && post.category === "finals" && post.opened_id === null).length;

  const camReqOpen = posts.filter(post => post.departments === "camera" 
    && post.category === "requirements" && post.opened_id).length;

  const camWorkOpen = posts.filter(post => post.departments === "camera" 
    && post.category === "workspace" && post.opened_id).length;

  const camFinOpen = posts.filter(post => post.departments === "camera" 
    && post.category === "finals" && post.opened_id).length;

  // SOUND
  const souReqUnopen = posts.filter(post => post.departments === "sound" 
    && post.category === "requirements" && post.opened_id === null).length;

  const souWorkUnopen = posts.filter(post => post.departments === "sound" 
    && post.category === "workspace" && post.opened_id === null).length;

  const souFinUnopen = posts.filter(post => post.departments === "sound" 
    && post.category === "finals" && post.opened_id === null).length;

  const souReqOpen = posts.filter(post => post.departments === "sound" 
    && post.category === "requirements" && post.opened_id).length;

  const souWorkOpen = posts.filter(post => post.departments === "sound" 
    && post.category === "workspace" && post.opened_id).length;

  const souFinOpen = posts.filter(post => post.departments === "sound" 
    && post.category === "finals" && post.opened_id).length;

  // LOCATION
  const locReqUnopen = posts.filter(post => post.departments === "location" 
    && post.category === "requirements" && post.opened_id === null).length;

  const locWorkUnopen = posts.filter(post => post.departments === "location" 
    && post.category === "workspace" && post.opened_id === null).length;

  const locFinUnopen = posts.filter(post => post.departments === "location" 
    && post.category === "finals" && post.opened_id === null).length;

  const locReqOpen = posts.filter(post => post.departments === "location" 
    && post.category === "requirements" && post.opened_id).length;

  const locWorkOpen = posts.filter(post => post.departments === "location" 
    && post.category === "workspace" && post.opened_id).length;

  const locFinOpen = posts.filter(post => post.departments === "location" 
    && post.category === "finals" && post.opened_id).length;

    // SCRIPT
    const scrReqUnopen = posts.filter(post => post.departments === "script" 
      && post.category === "requirements" && post.opened_id === null).length;

    const scrWorkUnopen = posts.filter(post => post.departments === "script" 
      && post.category === "workspace" && post.opened_id === null).length;

    const scrFinUnopen = posts.filter(post => post.departments === "script" 
      && post.category === "finals" && post.opened_id === null).length;

    const scrReqOpen = posts.filter(post => post.departments === "script" 
      && post.category === "requirements" && post.opened_id).length;

    const scrWorkOpen = posts.filter(post => post.departments === "script" 
      && post.category === "workspace" && post.opened_id).length;

    const scrFinOpen = posts.filter(post => post.departments === "script" 
      && post.category === "finals" && post.opened_id).length;

    // ART
    const artReqUnopen = posts.filter(post => post.departments === "art" 
      && post.category === "requirements" && post.opened_id === null).length;

    const artWorkUnopen = posts.filter(post => post.departments === "art" 
      && post.category === "workspace" && post.opened_id === null).length;

    const artFinUnopen = posts.filter(post => post.departments === "art" 
      && post.category === "finals" && post.opened_id === null).length;

    const artReqOpen = posts.filter(post => post.departments === "art" 
      && post.category === "requirements" && post.opened_id).length;

    const artWorkOpen = posts.filter(post => post.departments === "art" 
      && post.category === "workspace" && post.opened_id).length;

    const artFinOpen = posts.filter(post => post.departments === "art" 
      && post.category === "finals" && post.opened_id).length;

    // makeup
    const makReqUnopen = posts.filter(post => post.departments === "make-up" 
      && post.category === "requirements" && post.opened_id === null).length;

    const makWorkUnopen = posts.filter(post => post.departments === "make-up" 
      && post.category === "workspace" && post.opened_id === null).length;

    const makFinUnopen = posts.filter(post => post.departments === "make-up" 
      && post.category === "finals" && post.opened_id === null).length;

    const makReqOpen = posts.filter(post => post.departments === "make-up" 
      && post.category === "requirements" && post.opened_id).length;

    const makWorkOpen = posts.filter(post => post.departments === "make-up" 
      && post.category === "workspace" && post.opened_id).length;

    const makFinOpen = posts.filter(post => post.departments === "make-up" 
      && post.category === "finals" && post.opened_id).length;

    // COSTUME
    const warReqUnopen = posts.filter(post => post.departments === "wardrobe" 
      && post.category === "requirements" && post.opened_id === null).length;

    const warWorkUnopen = posts.filter(post => post.departments === "wardrobe" 
      && post.category === "workspace" && post.opened_id === null).length;

    const warFinUnopen = posts.filter(post => post.departments === "wardrobe" 
      && post.category === "finals" && post.opened_id === null).length;

    const warReqOpen = posts.filter(post => post.departments === "wardrobe" 
      && post.category === "requirements" && post.opened_id).length;

    const warWorkOpen = posts.filter(post => post.departments === "wardrobe" 
      && post.category === "workspace" && post.opened_id).length;

    const warFinOpen = posts.filter(post => post.departments === "wardrobe" 
      && post.category === "finals" && post.opened_id).length;

    // CASTING
    const casReqUnopen = posts.filter(post => post.departments === "casting" 
      && post.category === "requirements" && post.opened_id === null).length;

    const casWorkUnopen = posts.filter(post => post.departments === "casting" 
      && post.category === "workspace" && post.opened_id === null).length;

    const casFinUnopen = posts.filter(post => post.departments === "casting" 
      && post.category === "finals" && post.opened_id === null).length;

    const casReqOpen = posts.filter(post => post.departments === "casting" 
      && post.category === "requirements" && post.opened_id).length;

    const casWorkOpen = posts.filter(post => post.departments === "casting" 
      && post.category === "workspace" && post.opened_id).length;

    const casFinOpen = posts.filter(post => post.departments === "casting" 
      && post.category === "finals" && post.opened_id).length;

    // POST
    const posReqUnopen = posts.filter(post => post.departments === "post" 
      && post.category === "requirements" && post.opened_id === null).length;

    const posWorkUnopen = posts.filter(post => post.departments === "post" 
      && post.category === "workspace" && post.opened_id === null).length;

    const posFinUnopen = posts.filter(post => post.departments === "post" 
      && post.category === "finals" && post.opened_id === null).length;

    const posReqOpen = posts.filter(post => post.departments === "post" 
      && post.category === "requirements" && post.opened_id).length;

    const posWorkOpen = posts.filter(post => post.departments === "post" 
      && post.category === "workspace" && post.opened_id).length;

    const posFinOpen = posts.filter(post => post.departments === "post" 
      && post.category === "finals" && post.opened_id).length;

    // PRODUCTION
    const proReqUnopen = posts.filter(post => post.departments === "production" 
      && post.category === "requirements" && post.opened_id === null).length;

    const proWorkUnopen = posts.filter(post => post.departments === "production" 
      && post.category === "workspace" && post.opened_id === null).length;

    const proFinUnopen = posts.filter(post => post.departments === "production" 
      && post.category === "finals" && post.opened_id === null).length;

    const proReqOpen = posts.filter(post => post.departments === "production" 
      && post.category === "requirements" && post.opened_id).length;

    const proWorkOpen = posts.filter(post => post.departments === "production" 
      && post.category === "workspace" && post.opened_id).length;

    const proFinOpen = posts.filter(post => post.departments === "production" 
      && post.category === "finals" && post.opened_id).length;

    // STUNTS
    const stuReqUnopen = posts.filter(post => post.departments === "stunts" 
      && post.category === "requirements" && post.opened_id === null).length;

    const stuWorkUnopen = posts.filter(post => post.departments === "stunts" 
      && post.category === "workspace" && post.opened_id === null).length;

    const stuFinUnopen = posts.filter(post => post.departments === "stunts" 
      && post.category === "finals" && post.opened_id === null).length;

    const stuReqOpen = posts.filter(post => post.departments === "stunts" 
      && post.category === "requirements" && post.opened_id).length;

    const stuWorkOpen = posts.filter(post => post.departments === "stunts" 
      && post.category === "workspace" && post.opened_id).length;

    const stuFinOpen = posts.filter(post => post.departments === "stunts" 
      && post.category === "finals" && post.opened_id).length;

    // ELECTRIC
    const eleReqUnopen = posts.filter(post => post.departments === "electric" 
      && post.category === "requirements" && post.opened_id === null).length;

    const eleWorkUnopen = posts.filter(post => post.departments === "electric" 
      && post.category === "workspace" && post.opened_id === null).length;

    const eleFinUnopen = posts.filter(post => post.departments === "electric" 
      && post.category === "finals" && post.opened_id === null).length;

    const eleReqOpen = posts.filter(post => post.departments === "electric" 
      && post.category === "requirements" && post.opened_id).length;

    const eleWorkOpen = posts.filter(post => post.departments === "electric" 
      && post.category === "workspace" && post.opened_id).length;

    const eleFinOpen = posts.filter(post => post.departments === "electric" 
      && post.category === "finals" && post.opened_id).length;

    // UNIVERSAL
    const uniReqUnopen = posts.filter(post => post.departments === "universal" 
      && post.category === "requirements" && post.opened_id === null).length;

    const uniWorkUnopen = posts.filter(post => post.departments === "universal" 
      && post.category === "workspace" && post.opened_id === null).length;

    const uniFinUnopen = posts.filter(post => post.departments === "universal" 
      && post.category === "finals" && post.opened_id === null).length;

    const uniReqOpen = posts.filter(post => post.departments === "universal" 
      && post.category === "requirements" && post.opened_id).length;

    const uniWorkOpen = posts.filter(post => post.departments === "universal" 
      && post.category === "workspace" && post.opened_id).length;

    const uniFinOpen = posts.filter(post => post.departments === "universal" 
      && post.category === "finals" && post.opened_id).length;