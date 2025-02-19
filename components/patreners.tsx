import Image from "next/image"
import imgs from './image.png'
const partners = [
{ name: "Tech Mahindra", logo: 'https://th.bing.com/th/id/R.85958f9f311393b4da9a32f33c75710c?rik=QldeKkR8Cm41bg&riu=http%3a%2f%2fidealdesigns.in%2fwp-content%2fuploads%2f2020%2f08%2fsvs-mythri-real-estate-logo-design-hyderabad-best-construction-company-branding-tirupati-andhrapradesh-1024x683.jpg&ehk=EnKerj0gOmhVIC77%2f03RiTDgB8k102haakc6n6yd82A%3d&risl=&pid=ImgRaw&r=0' },
  { name: "Google", logo: 'https://www.codester.com/static/uploads/items/000/011/11294/preview-xl.jpg' },
  { name: "Microsoft", logo: 'https://th.bing.com/th/id/R.5cf0d550edc01b31a51a67e9b842bc1c?rik=owluqG2U4CdQ1w&riu=http%3a%2f%2falphaedgeinfratech.com%2fwp-content%2fuploads%2f2022%2f05%2fdlf-india.png&ehk=BuwK4P4ITNB6khEdtcoCfXmn%2b7f1Z298Wu9UKk3BHBE%3d&risl=&pid=ImgRaw&r=0' },
  { name: "Amazon", logo: 'https://bsmedia.business-standard.com/_media/bs/img/article/2018-09/25/full/1537870561-1893.jpg?im=FeatureCrop,size=(826,465)' },
  { name: "IBM", logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/ATS_LOGO.png/1200px-ATS_LOGO.png?20220816115454' },
  { name: "Intel", logo: 'https://www.central5properties.com/wp-content/uploads/2020/05/Tata-Housing-Logo-715x400-1.jpg' },
]

export function BrandCollaboration() {
  return (
    <section className="py-6">
      <div className="container px-4 mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-left">Our <span className="text-primary">Developers</span></h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-4 transition-all duration-300 ease-in-out bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                height={80}
                width={200}
                className="h-auto max-w-full transition-all duration-300 ease-in-out filter grayscale hover:filter-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

