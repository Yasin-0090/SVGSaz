import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { exportToSVG } from '../utils/exportSVG'
import api from '../utils/api'
import * as htmlToImage from 'html-to-image'
import toast from 'react-hot-toast'

const Header = ({ components, design_id }) => {
  const [loader, setLoader] = useState(false)

  // popup state
  const [openDownloadPopup, setOpenDownloadPopup] = useState(false)
  const [downloadLoading, setDownloadLoading] = useState(false)
  const popupRef = useRef(null)

  // close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpenDownloadPopup(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const saveImage = async () => {
    const getDiv = document.getElementById('main_design')
    if (!getDiv) {
      toast.error('بخش طراحی پیدا نشد (main_design)')
      return
    }

    const image = await htmlToImage.toBlob(getDiv)
    if (image) {
      const obj = { design: components }
      const formData = new FormData()
      formData.append('design', JSON.stringify(obj))
      formData.append('image', image)

      try {
        setLoader(true)
        const { data } = await api.put(`/api/update-user-design/${design_id}`, formData)
        toast.success(data.message)
      } catch (error) {
        toast.error(error?.response?.data?.message || 'خطا در ذخیره سازی')
      } finally {
        setLoader(false)
      }
    }
  }

const downloadSVG = () => {
    if (!components || components.length === 0) {
        toast.error('طراحی خالی است!')
        return
    }

    const svgString = exportToSVG(
        components,
        650,
        450
    )

    const blob = new Blob(
        [svgString],
        {
            type: 'image/svg+xml;charset=utf-8'
        }
    )

    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')

    link.href = url

    link.download = `SVGSaz-${new Date()
        .toLocaleDateString('fa-IR')
        .replace(/\//g, '-')}.svg`

    document.body.appendChild(link)

    link.click()

    document.body.removeChild(link)

    URL.revokeObjectURL(url)

    setOpenDownloadPopup(false)
}

  const downloadPNG = async () => {
    if (!components || components.length === 0) {
      toast.error('طراحی خالی است!')
      return
    }

    const getDiv = document.getElementById('main_design')
    if (!getDiv) {
      toast.error('بخش طراحی پیدا نشد (main_design)')
      return
    }

    try {
      setDownloadLoading(true)

      const dataUrl = await htmlToImage.toPng(getDiv, {
        style: { transform: 'scale(1)' },
      })

      const link = document.createElement('a')
      link.download = `SVGSaz-${new Date().toLocaleDateString('fa-IR').replace(/\//g, '-')}.png`
      link.href = dataUrl
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      setOpenDownloadPopup(false)
    } catch (e) {
      toast.error('خطا در دانلود PNG')
      console.log(e.error);
    } finally {
      setDownloadLoading(false)
    }
  }

  const toggleDownloadPopup = () => {
    if (!components || components.length === 0) {
      toast.error('طراحی خالی است!')
      return
    }
    setOpenDownloadPopup((prev) => !prev)
  }

  return (
    <div className='h-[60px] bg-linear-to-r from-[#212122] via-[#2728b] to-[#2a2b2c] w-full'>
      <div className='flex justify-between px-10 items-center text-gray-100 h-full'>
        <Link to={'/'}>
          <span className='text-4xl font-medium bg-linear-to-r from-[#00c4cc] via-[#8b3dff] to-[#5533ff] text-transparent bg-clip-text'>
            SVGSaz
          </span>
        </Link>

        <span className='text-xl'>Design Svg</span>

        <div className='flex justify-center items-center gap-2 text-gray-300 relative' ref={popupRef}>
          <button
            disabled={loader}
            onClick={saveImage}
            className='px-3 py-1.5 outline-none bg-[#252627] rounded-sm disabled:opacity-60 disabled:cursor-not-allowed'
          >
            {loader ? 'Loading...' : 'Save'}
          </button>

          <button
            onClick={toggleDownloadPopup}
            className='px-3 py-1.5 outline-none bg-[#252627] rounded-sm'
          >
            Download
          </button>

         
          {openDownloadPopup && (
            <div className='absolute right-0 top-[52px] w-[220px] bg-[#1f2021] border border-[#2f3031] rounded-md shadow-lg z-9999]'>
              <div className='px-2 py-2'>
                <span className='text-[#c4c0c0] font-bold text-sm'>Download Options</span>
              </div>

              <ul className='text-[#e0dddd] font-semibold'>
                <li>
                  <button
                    onClick={downloadSVG}
                    disabled={downloadLoading}
                    className='w-full text-left p-2 hover:bg-[#252627] disabled:opacity-60 disabled:cursor-not-allowed'
                  >
                    SVG
                  </button>
                </li>
                <li>
                  <button
                    onClick={downloadPNG}
                    disabled={downloadLoading}
                    className='w-full text-left p-2 hover:bg-[#252627] disabled:opacity-60 disabled:cursor-not-allowed'
                  >
                    {downloadLoading ? 'Loading PNG...' : 'PNG'}
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header