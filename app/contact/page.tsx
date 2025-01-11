import { Mail } from 'lucide-react'

const teamMembers = [
  { name: 'Binam Adhikari', email: '023neb753@sxc.edu.np' },
  { name: 'Bibek Gautam', email: '023neb734@sxc.edu.np' },
  { name: 'Dikshyanta Karki', email: '023neb749@sxc.edu.np' },
]

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
            <div className="flex items-center text-gray-600">
              <Mail className="w-5 h-5 mr-2 text-green-500" />
              <a href={`mailto:${member.email}`} className="hover:text-green-600">
                {member.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


