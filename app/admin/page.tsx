'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Plus, Trash2 } from 'lucide-react'
import { artworks } from '@/lib/mock-data'

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)
  const [localArtworks, setLocalArtworks] = useState(artworks)
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Character',
    image: '',
    year: new Date().getFullYear(),
    medium: 'Ink Drawing',
  })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'admin123') {
      setIsAuthenticated(true)
      setError('')
      setPassword('')
    } else {
      setError('Incorrect password')
      setPassword('')
    }
  }

  const handleAddArtwork = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.title || !formData.image) {
      setError('Title and image URL are required')
      return
    }

    const newArtwork = {
      id: `artwork-${Date.now()}`,
      ...formData,
      dimensions: 'Sketchbook',
    }

    setLocalArtworks([...localArtworks, newArtwork])
    setFormData({
      title: '',
      description: '',
      category: 'Character',
      image: '',
      year: new Date().getFullYear(),
      medium: 'Ink Drawing',
    })
    setShowAddForm(false)
    setError('')
  }

  const handleDeleteArtwork = (id: string) => {
    setLocalArtworks(localArtworks.filter(art => art.id !== id))
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-lg border border-sand max-w-md w-full">
          <h1 className="font-serif text-3xl text-charcoal mb-2">Admin Access</h1>
          <p className="text-stone mb-6">Only you can manage your artwork collection</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-2 border border-sand rounded focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-charcoal text-cream py-2 rounded font-medium hover:bg-gold hover:text-charcoal transition-colors"
            >
              Login
            </button>
          </form>

          <Link
            href="/"
            className="mt-6 flex items-center justify-center text-gold hover:text-charcoal transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-4xl text-charcoal mb-2">Admin Dashboard</h1>
            <p className="text-stone">Manage your artwork collection</p>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 text-gold hover:text-charcoal transition-colors"
          >
            <ArrowLeft size={20} />
            View Portfolio
          </Link>
        </div>

        {/* Add Artwork Button */}
        <div className="mb-8">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 bg-charcoal text-cream px-6 py-3 rounded font-medium hover:bg-gold hover:text-charcoal transition-colors"
          >
            <Plus size={20} />
            Add New Artwork
          </button>
        </div>

        {/* Add Artwork Form */}
        {showAddForm && (
          <div className="bg-white border border-sand rounded-lg p-6 mb-8">
            <h2 className="font-serif text-2xl text-charcoal mb-6">Add New Artwork</h2>
            <form onSubmit={handleAddArtwork} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    placeholder="Artwork title"
                    className="w-full px-4 py-2 border border-sand rounded focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-sand rounded focus:outline-none focus:ring-2 focus:ring-gold"
                  >
                    <option>Character</option>
                    <option>Portrait</option>
                    <option>Illustration</option>
                    <option>Abstract</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Image URL *
                </label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-2 border border-sand rounded focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Describe your artwork"
                  rows={3}
                  className="w-full px-4 py-2 border border-sand rounded focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Year
                  </label>
                  <input
                    type="number"
                    value={formData.year}
                    onChange={(e) =>
                      setFormData({ ...formData, year: parseInt(e.target.value) })
                    }
                    className="w-full px-4 py-2 border border-sand rounded focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Medium
                  </label>
                  <input
                    type="text"
                    value={formData.medium}
                    onChange={(e) =>
                      setFormData({ ...formData, medium: e.target.value })
                    }
                    placeholder="e.g., Ink Drawing, Digital"
                    className="w-full px-4 py-2 border border-sand rounded focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-charcoal text-cream py-2 rounded font-medium hover:bg-gold hover:text-charcoal transition-colors"
                >
                  Add Artwork
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 bg-stone text-cream py-2 rounded font-medium hover:bg-charcoal transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Artwork Gallery */}
        <div>
          <h2 className="font-serif text-2xl text-charcoal mb-6">
            Your Collection ({localArtworks.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {localArtworks.map((artwork) => (
              <div
                key={artwork.id}
                className="bg-white border border-sand rounded-lg overflow-hidden hover:border-gold transition-colors"
              >
                <div className="relative h-48 bg-muted overflow-hidden">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg text-charcoal mb-1">
                    {artwork.title}
                  </h3>
                  <p className="text-sm text-gold mb-3">{artwork.category}</p>
                  <p className="text-sm text-stone mb-4 line-clamp-2">
                    {artwork.description}
                  </p>
                  <div className="flex justify-between items-center text-xs text-stone mb-4">
                    <span>{artwork.year}</span>
                    <span>{artwork.medium}</span>
                  </div>
                  <button
                    onClick={() => handleDeleteArtwork(artwork.id)}
                    className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 py-2 rounded hover:bg-red-100 transition-colors"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
