require 'calc'
RSpec.describe "A calc" do
  it {
    user =  double('user')
    allow(user).to receive(:name).and_return('taguchi')
    calc = Calc.new
    expect(calc.add(5, 2, user.name)).to eq('7 by taguchi')
  }
end