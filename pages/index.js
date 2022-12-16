import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/header/header';
import SignInForm from '../components/signInForm/signInForm';

export default function Home() {
  return <SignInForm />;
}
