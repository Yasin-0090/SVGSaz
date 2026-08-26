// src/utils/exportSVG.js

export const exportToSVG = (components, width = 650, height = 450) => {

  if (!components || components.length === 0) {
    return ''
  }

  const mainFrame =
    components.find(c => c.name === 'main_frame') || components[0]

  const others = components.filter(
    c => c.name !== 'main_frame'
  )

  let elements = ''


  // -----------------------------
  // Background
  // -----------------------------

  if (mainFrame?.image) {

    elements += `
      <image
        href="${mainFrame.image}"
        x="0"
        y="0"
        width="${width}"
        height="${height}"
        preserveAspectRatio="none"
      />
    `

  } else {

    elements += `
      <rect
        x="0"
        y="0"
        width="${width}"
        height="${height}"
        fill="${mainFrame?.color || '#ffffff'}"
      />
    `
  }


  // -----------------------------
  // Other Components
  // -----------------------------

  others.forEach(c => {

    const {
      left = 0,
      top = 0,
      width: w = 100,
      height: h = 100,
      rotate = 0,
      opacity = 1,
      color = '#000',
      radius = 0,
      font = 22,
      weight = 400,
      title = '',
      image: img,
      type,
      padding = 6
    } = c


    // مرکز واقعی Component
    const centerX = left + w / 2
    const centerY = top + h / 2


    const transform = rotate
      ? `transform="rotate(${rotate} ${centerX} ${centerY})"`
      : ''


    // -----------------------------
    // Shape
    // -----------------------------

    if (c.name === 'shape') {

      // Rectangle
      if (type === 'rect') {

        elements += `
          <rect
            x="${left}"
            y="${top}"
            width="${w}"
            height="${h}"
            fill="${color}"
            opacity="${opacity}"
            ${transform}
          />
        `
      }


      // Circle
      if (type === 'circle') {

        const cx = left + w / 2
        const cy = top + h / 2
        const r = Math.min(w, h) / 2

        elements += `
          <circle
            cx="${cx}"
            cy="${cy}"
            r="${r}"
            fill="${color}"
            opacity="${opacity}"
            ${transform}
          />
        `
      }


      // Triangle
      if (type === 'trangle') {

        elements += `
          <polygon
            points="
              ${left + w / 2},${top}
              ${left + w},${top + h}
              ${left},${top + h}
            "
            fill="${color}"
            opacity="${opacity}"
            ${transform}
          />
        `
      }
    }


    // -----------------------------
    // Text
    // -----------------------------

    if (c.name === 'text') {

      elements += `
        <text
          x="${left + padding}"
          y="${top + font + padding}"
          font-size="${font}"
          font-weight="${weight}"
          fill="${color}"
          opacity="${opacity}"
          ${transform}
        >${title || 'متن'}</text>
      `
    }


    // -----------------------------
    // Image
    // -----------------------------

    if (c.name === 'image' && img) {

      const clip =
        radius > 0
          ? `clip-path: inset(0 round ${radius}%);`
          : ''

      elements += `
        <image
          href="${img}"
          x="${left}"
          y="${top}"
          width="${w}"
          height="${h}"
          opacity="${opacity}"
          style="${clip}"
          ${transform}
        />
      `
    }

  })


  // -----------------------------
  // Final SVG
  // -----------------------------

  return `<?xml version="1.0" encoding="UTF-8"?>

<svg
  width="${width}px"
  height="${height}px"
  viewBox="0 0 ${width} ${height}"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>

  ${elements}

</svg>`
}