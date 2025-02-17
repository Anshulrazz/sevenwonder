import React from 'react';
import './Team.module.css';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import founder from './ceo.jpg'
import Link from 'next/link';
import { Button } from './ui/button';

const Team = () => {
  return (
    <>
      <div className="container justify-center px-5 py-2 md:px-20 lg:px-40">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-900 md:text-4xl lg:text-5xl">
          Seven Wonder Real Estate Leadership
        </h2>
        <p className="text-gray-600 lg:w-8/12 lg:mx-auto">
          Seven Wonder Real Estate is a company that prides itself not only on its award-winning technology, but also on the talent of its people - some of the brightest minds and most experienced executives in the real estate industry.
        </p>
        <div className="grid grid-cols-1 gap-4 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-row items-center justify-center">
            <Image
              src={founder}
              alt="Dhruv Goswami"
              width={100}
              height={100}
              style={{ borderRadius: '12px' }}
            />
            <div className="ml-2">
              <h5 className="py-2 text-2xl card-title txtb">Ashish Mittal</h5>
              <p className="txtb" style={{ fontSize: '12px' }}>FOUNDER & CEO</p>
              <p className="flex justify-between mt-2 txtb">
                <a href="#" className="txtb"><FaLinkedin size="20" /></a>{' '}
                <a href="#" className="txtb"><FaInstagram size="20" /></a>{' '}
                <a href="#" className="txtb"><FaTwitter size="20" /></a>
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <Image
              src={founder}
              alt="Dhruv Goswami"
              width={100}
              height={100}
              style={{ borderRadius: '12px' }}
            />
            <div className="ml-2">
              <h5 className="py-2 text-2xl card-title txtb">Lokesh Jat</h5>
              <p className="txtb" style={{ fontSize: '12px' }}>MANAGING DIRECTOR</p>
              <p className="flex justify-between mt-2 txtb">
                <a href="#" className="txtb"><FaLinkedin size="20" /></a>{' '}
                <a href="#" className="txtb"><FaInstagram size="20" /></a>{' '}
                <a href="#" className="txtb"><FaTwitter size="20" /></a>
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <Image
              src="https://vermaji.onrender.com/static/media/logo.0d1471ddb34cde1a8f11.png"
              alt="Dhruv Goswami"
              width={100}
              height={100}
              style={{ borderRadius: '12px' }}
            />
            <div className="ml-2">
              <h5 className="py-2 text-2xl card-title txtb">Renu Sharma</h5>
              <p className="txtb" style={{ fontSize: '12px' }}>HR & ADMIN</p>
              <p className="flex justify-between mt-2 txtb">
                <a href="#" className="txtb"><FaLinkedin size="20" /></a>{' '}
                <a href="#" className="txtb"><FaInstagram size="20" /></a>{' '}
                <a href="#" className="txtb"><FaTwitter size="20" /></a>
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <Image
              src="https://vermaji.onrender.com/static/media/logo.0d1471ddb34cde1a8f11.png"
              alt="Dhruv Goswami"
              width={100}
              height={100}
              style={{ borderRadius: '12px' }}
            />
            <div className="ml-2">
              <h5 className="py-2 text-2xl card-title txtb">AJAY </h5>
              <p className="txtb" style={{ fontSize: '12px' }}>SALES-DIRECTOR</p>
              <p className="flex justify-between mt-2 txtb">
                <a href="#" className="txtb"><FaLinkedin size="20" /></a>{' '}
                <a href="#" className="txtb"><FaInstagram size="20" /></a>{' '}
                <a href="#" className="txtb"><FaTwitter size="20" /></a>
              </p>
            </div>
          </div>
        </div>
        <p className='text-right'>
          <Link href="/team">
            <Button className="text-white btn-sm bg-primary hover:bg-primary" variant="outline" size="sm">
              More
            </Button>
          </Link> 
          </p>
      </div >
    </>
  );
};

export default Team;

